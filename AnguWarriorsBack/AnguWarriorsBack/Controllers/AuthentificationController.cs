using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AnguWarriorsBack.Models;
using AnguWarriorsBack.DataBase;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace AnguWarriorsBack.Controllers
{

  // [Route("api/auth")]
  [ApiController]
  public class AuthentificationController : ControllerBase
  {


    private readonly AnguWarrDBContext _context;

    public AuthentificationController(AnguWarrDBContext _context)
    {
      this._context = _context;

    }


    [HttpPost("/api/register")]
    public async Task<IActionResult> RegisterUser([FromBody] User user)
    {
      this._context.Users.Add(user);
      await this._context.SaveChangesAsync();
      return Ok();

    }

    [HttpPost("/api/login")]
    public async Task<IActionResult> Login([FromBody] LoginDTO user)
    {
      if (user == null)
      {
        return BadRequest("Invalid client request");
      }

        User korisnik = await this._context.Users.FindAsync(user.Username);

      if (korisnik==null) {
        return BadRequest("There is no user with this Username!!!");

      }

      if (korisnik.Password == user.Password)
      {
        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.Name, user.Username)
        };
            if (korisnik.UserType==TipKorisnika.ADMIN) {
            claims.Add(new Claim(ClaimTypes.Role, "Admin"));

            //new Claim(ClaimTypes.Role, "Manager") 
        };
        var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
        var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
        var tokeOptions = new JwtSecurityToken(
            issuer: "http://localhost:44370",
            audience: "http://localhost:4200",
            claims: claims,
            expires: DateTime.Now.AddMinutes(2),
            signingCredentials: signinCredentials
        );
        var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
        return Ok(new { Token = tokenString });

      }
      else {

        return Unauthorized();

      }


    }

    [HttpGet("/api/getUser/{username}")]
    public async Task<IActionResult> GetUser([FromRoute]string username)
    {
      User retVal = await this._context.Users.FindAsync(username);
      return Ok(retVal);
    }

  }
}
