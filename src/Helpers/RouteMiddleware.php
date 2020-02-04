<?php

namespace Helpers;

use Concrete\Core\Config\Repository\Repository;
use Concrete\Core\Http\Middleware\DelegateInterface;
use Concrete\Core\Http\Middleware\MiddlewareInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;

/**
 * Custom middleware that adds information to the response
 */
class RouteMiddleware implements MiddlewareInterface
{
    /** @var \Concrete\Core\Config\Repository\Repository */
    protected $config;
    public function __construct(Repository $config)
    {
        $this->config = $config;
    }
    /**
     * Process the request and return a response
     * @param \Symfony\Component\HttpFoundation\Request $request
     * @param DelegateInterface $frame
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function process(Request $request, DelegateInterface $frame)
    {
        // Get the response object from the next middleware
        $response = $frame->next($request);

        $requestPath = $request->getRequestUri();

        if (
            strpos($requestPath, 'dashboard') !== false ||
            strpos($requestPath, 'graphql') !== false ||
            strpos($requestPath, 'refresh_token') !== false ||
            strpos($requestPath, '#!/') !== false ||
            $requestPath === '/'
        ) {
            return $response;
        } else {
            return new RedirectResponse('/#!/' . substr($requestPath, 1), 301);
        }

        return $response;
    }
}
