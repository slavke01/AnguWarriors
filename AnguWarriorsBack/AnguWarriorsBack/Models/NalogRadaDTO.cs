using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnguWarriorsBack.Models
{
  public class NalogRadaDTO
  {


    public string IdNaloga { get; set; }
    public TipRada NalogType { get; set; }
    public string Status { get; set; }
    public string IdIncidenta { get; set; }
    public string Ulica { get; set; }
    public DateTime PocetakRada { get; set; }
    public DateTime KrajRada { get; set; }
    public string Svrha { get; set; }
    public string Beleske { get; set; }
    public bool Hitno { get; set; }
    public string Kompanija { get; set; }
    public string TelefonskiBroj { get; set; }

    public NalogRadaDTO() { }
  }
}
