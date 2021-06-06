using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnguWarriorsBack.Models
{



  public class PozivDTO
  {


    public string Razlog { get; set; }
    public string Komentar { get; set; }
    public string Kvar { get; set; } // Ovo mozda zamjeniti klasom posle
    public string UsernameKor { get; set; }

    public PozivDTO() { }

    public PozivDTO( string razlog, string komentar, string kvar, string idk)
    {
 
      this.Razlog = razlog;
      this.Komentar = komentar;
      this.Kvar = kvar;
      this.UsernameKor = idk;

    }

  }
}
