<?php defined('C5_EXECUTE') or die("Access Denied.");

use Concrete\Core\Support\Facade\Application as App;

$authorize = App::make(\Helpers\Authorize::class);
$anonymusToken = $authorize->loginAndGetTokenFromAnonymus();
?>

<?php Loader::element('footer_required'); ?>
<script>
    window.onload = function() {
        window.concrete5_graphql_websocket_security_sample.configModule({
            showDebugInfos: true,
            productivMode: false,
            secureProtocol: '<?= $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? true : false ?>',
            graphqlUrl: '<?= $_SERVER['HTTP_HOST'] . '/index.php/graphql' ?>',
            refreshTokenUrl: '<?= $_SERVER['HTTP_HOST'] . '/index.php/refresh_token' ?>',
            logoutUrl: '<?= $_SERVER['HTTP_HOST'] . '/index.php/logout_token' ?>',
            websocketUrl: '<?= $_SERVER['HTTP_HOST'] . '/wss2/' ?>',
            anonymusToken: '<?= $anonymusToken ?>',
        });
        window.concrete5_graphql_websocket_security_sample.initModule();

        const appStarted = new CustomEvent('appStarted');
        window.dispatchEvent(appStarted);
    };
</script>

</div><!-- page wrapper -->

</body>

</html>