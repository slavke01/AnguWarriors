using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AnguWarriorsBack.Models
{
  [Table("PlanRadaChanges")]
  public class PlanRadaChanges
  {
    [Key]
    public string Id { get; set; }
    [Required]
    public string IdIncidenta { get; set; }
    [Required]
    public string Message { get; set; }

    public PlanRadaChanges() { }
    public PlanRadaChanges(string incID, string msg)
    {
      this.Id = Guid.NewGuid().ToString();
      this.IdIncidenta = incID;
      this.Message = msg;
    }
  }
}
