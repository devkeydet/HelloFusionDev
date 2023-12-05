using HelloPluginAssembly.Models;
using Microsoft.Xrm.Sdk;
using Newtonsoft.Json;
using System;

namespace HelloPluginAssembly.Tables
{
    /// <summary>
    /// Plugin development guide: https://docs.microsoft.com/powerapps/developer/common-data-service/plug-ins
    /// Best practices and guidance: https://docs.microsoft.com/powerapps/developer/common-data-service/best-practices/business-logic/
    /// </summary>
#pragma warning disable IDE1006 // Naming Styles
    public class dkdt_HelloFusionDev_Create : PluginBase
#pragma warning restore IDE1006 // Naming Styles
    {
        public dkdt_HelloFusionDev_Create(string unsecureConfiguration, string secureConfiguration)
            : base(typeof(dkdt_HelloFusionDev_Create))
        {
            // TODO: Implement your custom configuration handling
            // https://docs.microsoft.com/powerapps/developer/common-data-service/register-plug-in#set-configuration-data
        }

        // Entry point for custom business logic execution
        protected override void ExecuteDataversePlugin(ILocalPluginContext localPluginContext)
        {
            if (localPluginContext == null)
            {
                throw new ArgumentNullException(nameof(localPluginContext));
            }

            var context = localPluginContext.PluginExecutionContext;
            // TODO: Implement your custom business logic

            // Check for the entity on which the plugin would be registered
            if (context.InputParameters.Contains("Target") && context.InputParameters["Target"] is Entity)
            {
                var entity = (Entity)context.InputParameters["Target"];

                // Do something to prove dependent assembly working

                var movie = new Movie
                {
                    Name = "Some Movie"
                };

                string json = JsonConvert.SerializeObject(movie);

                entity["dkdt_name"] = $"{entity["dkdt_name"]} - updated in a plugin ({json} created using Json.NET)";
            }
        }
    }
}
