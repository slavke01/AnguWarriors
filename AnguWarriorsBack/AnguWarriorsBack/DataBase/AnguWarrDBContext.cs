using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AnguWarriorsBack.Models;
namespace AnguWarriorsBack.DataBase
{
  public class AnguWarrDBContext:DbContext
  {

    public AnguWarrDBContext(DbContextOptions<AnguWarrDBContext> options ):base(options){

    }



    public DbSet<User> Users { get; set; }

  }
}
