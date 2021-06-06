using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnguWarriorsBack.Models
{
  public class PorukaDTO
  {

    public string IdKorisnika { get; set; }
    public string Sadrzaj { get; set; }
    public string Tip { get; set; }
    public bool Procitana { get; set; }

    public PorukaDTO() { }


  }
}
