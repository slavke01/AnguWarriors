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


    public AnguWarrDBContext() : base() { }
    public AnguWarrDBContext(DbContextOptions<AnguWarrDBContext> options ):base(options){

    }

           public DbSet<User> Users { get; set; }
           public DbSet<Element> Elements { get; set; }
           public DbSet<Incident> Incidents { get; set; }
           public DbSet<NalogRada> Nalozi { get; set; }
           public DbSet<PlanRada> Planovi { get; set; }
           public DbSet<IncidentChangesMessage> IncidentChanges { get; set; }
           public DbSet<NalogRadaChanges> NalogRadaChanges { get; set; }
           public DbSet<PlanRadaChanges> PlanRadaChanges { get; set; }
           public DbSet<SafetyDoc> SafetyDocuments { get; set; }
    }
}
