<?php
defined('C5_EXECUTE') or die("Access Denied.");

$user = new User();
?>
<!DOCTYPE HTML>
<html lang="<?php echo Localization::activeLanguage() ?>">
<head>
    <base href="/" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous">    
    <?php echo $html->css($view->getStylesheet('main.less')) ?> 
    <?php Loader::element('header_required', array('pageTitle' => $pageTitle)); ?>   
</head>
<body id="page<?php echo $c->getCollectionID(); ?>">
    <div class="<?php echo $c->getPageWrapperClass() ?> ccm-ui">