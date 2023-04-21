using System;
using System.Collections.Generic;

namespace API_VanityHairSalon.Models;

public partial class Cliente
{
    public int Id { get; set; }

    public string Identificacion { get; set; } = null!;

    public string Direccion { get; set; } = null!;

    public string Estatus { get; set; }

    public virtual Persona? IdentificacionNavigation { get; set; } = null!;
}
