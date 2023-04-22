using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using API_VanityHairSalon.Models;

namespace API_VanityHairSalon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly VanityHairSalonContext _context;

        public LoginController(VanityHairSalonContext context)
        {
            _context = context;
        }

        [HttpGet("{Identificacion} {Clave}", Name = "Login")]
        public ActionResult Login(string Identificacion, string Clave)
        {
            try
            {
                //Query para buscar el registro correspondiente en la tabla Usuario y recuperar su Clave.
                var usuario = (from p in _context.Personas
                               join u in _context.Usuarios on p.IdUsuario equals u.IdUsuario
                               where p.Identificacion == Identificacion
                               select new { p.IdUsuario, p.Nombre, p.Apellido, u.Clave, u.IdRol, u.Estatus, p.Identificacion }).FirstOrDefault();

                if (usuario == null) return NotFound();

                if (usuario.Clave == Clave)
                {
                    return Ok(usuario);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
