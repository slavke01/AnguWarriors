using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using AnguWarriorsBack.DataBase;
using Microsoft.EntityFrameworkCore;
using AutoMapper;

namespace AnguWarriorsBack
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
               services.AddCors();
     // services.AddCors(options =>
     // {
       // options.AddPolicy("AllowAll",
      //      builder =>
      //      {
        //      builder
       //           .AllowAnyOrigin()
       //           .AllowAnyMethod()
       //           .AllowAnyHeader();
        //    });
    //  });
            services.AddAutoMapper(typeof(Startup));

               services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
               services.AddDbContext<AnguWarrDBContext>(options =>
               options.UseSqlServer(Configuration.GetConnectionString("AnguWarrConnectionString")));
     
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
               
                app.UseHsts();
            }
      // app.UseCors("AllowAll"); 
            app.UseCors(builder =>
           builder.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod()
            );
      //  app.UseCors(options => options.WithOrigins("http://localhost:4200")
      //.AllowAnyMethod()
      // .AllowAnyHeader()
      //  .AllowAnyOrigin());
      app.UseHttpsRedirection();
      app.UseMvc();
        }
    }
}
