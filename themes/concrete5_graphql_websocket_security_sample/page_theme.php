<?php

namespace Concrete\Package\Concrete5GraphqlWebsocketSecuritySample\Theme\Concrete5GraphqlWebsocketSecuritySample;

use Concrete\Core\Page\Theme\Theme;

class PageTheme extends Theme
{
    protected $pThemeGridFrameworkHandle = 'bootstrap3';

    public function registerAssets()
    {
        $this->requireAsset('javascript', 'backstretch');
        $this->requireAsset('javascript', 'jquery');
        $this->requireAsset('javascript', 'concrete5_graphql_websocket_security_sample');
        $this->requireAsset('css', 'bootstrap');
    }

    public function getThemeBlockClasses()
    { }

    public function getThemeAreaClasses()
    { }

    public function getThemeDefaultBlockTemplates()
    { }

    public function getThemeEditorClasses()
    {
        return array();
    }
}
