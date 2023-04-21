using System;
using System.Collections.Generic;

namespace API_VanityHairSalon.Models;

public partial class Cita
{
    public int Id { get; set; }

    public string Descripcion { get; set; } = null!;

    public DateTime Fecha { get; set; }

    public string Identificacion { get; set; } = null!;

    public int ServicioId { get; set; }

    public DateTime? FechaCreacion { get; set; }

    public int IdEmpleado { get; set; }

    public string Estatus { get; set; } = null!;

    public virtual Empleado? IdEmpleadoNavigation { get; set; } = null!;

    public virtual Persona? IdentificacionNavigation { get; set; } = null!;

    public virtual Servicio? Servicio { get; set; } = null!;
}
