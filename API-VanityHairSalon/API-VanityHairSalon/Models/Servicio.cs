using System;
using System.Collections.Generic;

namespace API_VanityHairSalon.Models;

public partial class Servicio
{
    public int Id { get; set; }

    public string Nombre { get; set; } = null!;

    public int Duracion { get; set; }

    public decimal Precio { get; set; }

    public string Estatus { get; set; }

    public virtual ICollection<Cita> Cita { get; } = new List<Cita>();
}
