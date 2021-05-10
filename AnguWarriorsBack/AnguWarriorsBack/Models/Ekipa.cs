using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnguWarriorsBack.Models
{
    public class Ekipa
    {

        public string IdEkipe { get; set; }
        public string NazivEkipe { get; set; }
        public List<User> ListaClanova { get; set; }

        public Ekipa() { }
        public Ekipa(string idEkipe,string naziv,List<User> lista) {

            this.IdEkipe = idEkipe;
            this.NazivEkipe = naziv;
            this.ListaClanova = lista;


        }

    }
}
