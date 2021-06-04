using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnguWarriorsBack.Models
{
  public class SafetyDocDTO
  {

    public string Id { get; set; }
    public TipRada SafetyType { get; set; }
    public string Status { get; set; }
    public string CreatedBy { get; set; }
    public string Detalji { get; set; }
    public string Beleske { get; set; }
    public string TelefonskiBroj { get; set; }

    public SafetyDocDTO() { }
    


  }
}
