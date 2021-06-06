using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnguWarriorsBack.Models
{
  public class PlanRadaDTO
  {
    public string IdPlana { get; set; }
    public TipRada DocumentType { get; set; }
    public DateTime PocetakRada { get; set; }
    public DateTime KrajRada { get; set; }
    public string CreatedBy { get; set; }
    public string Svrha { get; set; }
    public string Beleske { get; set; }
    public string Kompanija { get; set; }
    public string TelefonskiBroj { get; set; }
    public string Ulica { get; set; }
    public string Detalji { get; set; }
    public string Status { get; set; }
    public string workRequestId { get; set; }
    public string crewId { get; set; }

    public PlanRadaDTO() { }



  }
}
