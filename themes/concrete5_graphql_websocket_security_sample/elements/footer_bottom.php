<?php defined('C5_EXECUTE') or die("Access Denied.");

use Concrete\Core\Support\Facade\Application as App;

$authorize = App::make(\Helpers\Authorize::class);
$anonymusTokens = json_encode($authorize->loginAndGetTokenFromAnonymus());
?>

<?php Loader::element('footer_required'); ?>
<script>
    window.onload = function() {
        window.concrete5_graphql_websocket_security_sample.configModule({
            showDebugInfos: true,
            productivMode: true,
            secureProtocol: '<?= $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? true : false ?>',
            graphqlUrl: '<?= $_SERVER['HTTP_HOST'] . '/index.php/graphql' ?>',
            websocketUrl: '<?= $_SERVER['HTTP_HOST'] . '/wss2/' ?>',
            anonymusTokens: '<?= $anonymusTokens ?>',
        });
        window.concrete5_graphql_websocket_security_sample.initModule();

        const appStarted = new CustomEvent('appStarted');
        window.dispatchEvent(appStarted);
    };
</script>

</div><!-- page wrapper -->

</body>

</html>