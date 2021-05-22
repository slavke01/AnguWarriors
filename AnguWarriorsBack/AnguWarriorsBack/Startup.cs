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
using AnguWarriorsBack.Provider;
using Microsoft.Owin.Security.OAuth;
using Microsoft.Owin;
using Owin;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

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

                services.AddAuthentication(opt => {
                    opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                   opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                  .AddJwtBearer(options =>
                  {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                         ValidateIssuer = true,
                         ValidateAudience = true,
                         ValidateLifetime = true,
                         ValidateIssuerSigningKey = true,
                         ValidIssuer = "http://localhost:44370",
                         ValidAudience = "http://localhost:4200",
                         IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("superSecretKey@345"))
                    };
                  });






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
            //Ne dirati
            app.UseCors(builder =>
            builder.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod()
            );

      app.UseAuthentication();
      app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
