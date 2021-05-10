﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnguWarriorsBack.Models
{
    public class Potrosac
    {

        public string Ime { get; set; }
        public string Prezime { get; set; }
        public string Id { get; set; }
        public string Lokacija { get; set; } //Mozda napraviti Klasu lokacija posle mozda ne
        public int Prioritet { get; set; }
        public string TelefonskiBroj { get; set; }
        public TipPotrosaca PotrosacType { get; set; }


        public Potrosac() { }
        public Potrosac(string ime,string prezime,string id,string lokacija,int prio,string tele,TipPotrosaca tip) {

            this.Ime = ime;
            this.Prezime = prezime;
            this.Id = id;
            this.Lokacija = lokacija;
            this.Prioritet = prio;
            this.TelefonskiBroj = tele;
            this.PotrosacType = tip;


        }
    }
}
