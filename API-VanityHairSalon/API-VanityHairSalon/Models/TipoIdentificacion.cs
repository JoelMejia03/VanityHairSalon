using System;
using System.Collections.Generic;

namespace API_VanityHairSalon.Models;

public partial class TipoIdentificacion
{
    public int IdTipoIde { get; set; }

    public string TipoIdentificacion1 { get; set; } = null!;

    public virtual ICollection<Persona> Personas { get; } = new List<Persona>();
}
