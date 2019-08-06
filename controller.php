<?php

namespace Concrete\Package\Concrete5GraphqlWebsocketSecuritySample;

use Concrete\Core\Package\Package;
use Concrete\Core\Asset\Asset;
use Concrete\Core\Asset\AssetList;
use Concrete\Core\Http\ServerInterface;

class Controller extends Package
{

    protected $appVersionRequired = '8.1.0';
    protected $pkgVersion = '0.0.1';
    protected $pkgHandle = 'concrete5_graphql_websocket_security_sample';
    protected $pkgName = 'GraphQL, Websockets Security Sample';
    protected $pkgDescription = 'Shows how to use the GraphQL, Websockets Security Package in Concrete5';
    protected $pkgAutoloaderRegistries = [
        'src/Helpers' => '\Helpers',
    ];

    public function on_start()
    {
        $this->app->extend(ServerInterface::class, function (ServerInterface $server) {
            return $server->addMiddleware($this->app->make(\Helpers\RouteMiddleware::class));
        });
        $al = AssetList::getInstance();
        $al->register(
            'javascript',
            'concrete5_graphql_websocket_security_sample',
            'js/dist/concrete5_graphql_websocket_security_sample.js',
            array('position' => Asset::ASSET_POSITION_FOOTER, 'minify' => false, 'combine' => true),
            $this
        );
    }

    public function install()
    {
        parent::install();
        $this->installXML();
    }

    public function upgrade()
    {
        parent::upgrade();
        $this->installXML();
    }

    private function installXML()
    {
        $this->installContentFile('config/install.xml');
    }
}
