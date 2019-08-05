<?php
namespace Concrete\Package\SampleComposerPackage;

use Concrete\Core\Package\Package;

class Controller extends Package
{

    protected $appVersionRequired = '8.1.0';
    protected $pkgVersion = '0.1';
    protected $pkgHandle = 'concrete5_graphql_websocket_security_sample';
    protected $pkgName = 'GraphQL, Websockets Security Sample';
    protected $pkgDescription = 'Shows how to use the GraphQL, Websockets Security Package in Concrete5';

    public function on_start()
    {
    }

}
