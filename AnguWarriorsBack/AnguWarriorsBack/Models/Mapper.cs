using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace AnguWarriorsBack.Models
{
  public class Mapper:Profile
  {
    public void AutoMapping()
    {
      CreateMap<NalogRadaDTO, NalogRada>(); // means you want to map from User to UserDTO
    }
  }
}
