# HelloFusionDev

Get started by:

1. Cloning the repo
1. `cd HelloFusionDev`
1. `cd webresource-src`
1. `npm install`
1. `cd ..`
1. `dotnet build`

In the `bin/debug` directory, you will have managed and unmanaged versions of the solution.  The web resource in the solution will not be minified and will have source maps.  If you run `dotnet build -c release`, the solutions will have optmized web resources.
