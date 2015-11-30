using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Hosting;
using Microsoft.Extensions.DependencyInjection;

namespace w3学习
{
    public class Startup
    {
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection env)
        {
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseStaticFiles();
            app.UseDirectoryBrowser();
        }

        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
