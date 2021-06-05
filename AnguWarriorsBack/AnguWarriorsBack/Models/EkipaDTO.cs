using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnguWarriorsBack.Models
{
  public class EkipaDTO
  {
 
    public string IdEkipe { get; set; }
   
    public string NazivEkipe { get; set; }

    public List<string> usersId { get; set; }

    public EkipaDTO() { }

  }
}
