using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnguWarriorsBack.Models
{
    public class Poziv
    {
        public string Razlog { get; set; }
        public string Komentar { get; set; }
        public string Kvar { get; set; } // Ovo mozda zamjeniti klasom posle 
        public string IdPotrosaca { get; set; }


        public Poziv() { }

        public Poziv(string razlog,string komentar,string kvar,string id) {
            this.Razlog = razlog;
            this.Komentar = komentar;
            this.Kvar = kvar;
            this.IdPotrosaca = id;

        }
    }
}
