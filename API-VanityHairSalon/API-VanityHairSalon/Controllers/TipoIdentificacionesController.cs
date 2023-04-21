using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_VanityHairSalon.Models;

namespace API_VanityHairSalon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TipoIdentificacionesController : ControllerBase
    {
        private readonly VanityHairSalonContext _context;

        public TipoIdentificacionesController(VanityHairSalonContext context)
        {
            _context = context;
        }

        // GET: api/TipoIdentificaciones
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TipoIdentificacion>>> GetTipoIdentificacions()
        {
          if (_context.TipoIdentificacions == null)
          {
              return NotFound();
          }
            return await _context.TipoIdentificacions.ToListAsync();
        }

        // GET: api/TipoIdentificaciones/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TipoIdentificacion>> GetTipoIdentificacion(int id)
        {
          if (_context.TipoIdentificacions == null)
          {
              return NotFound();
          }
            var tipoIdentificacion = await _context.TipoIdentificacions.FindAsync(id);

            if (tipoIdentificacion == null)
            {
                return NotFound();
            }

            return tipoIdentificacion;
        }

        // PUT: api/TipoIdentificaciones/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTipoIdentificacion(int id, TipoIdentificacion tipoIdentificacion)
        {
            if (id != tipoIdentificacion.IdTipoIde)
            {
                return BadRequest();
            }

            _context.Entry(tipoIdentificacion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoIdentificacionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TipoIdentificaciones
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TipoIdentificacion>> PostTipoIdentificacion(TipoIdentificacion tipoIdentificacion)
        {
          if (_context.TipoIdentificacions == null)
          {
              return Problem("Entity set 'VanityHairSalonContext.TipoIdentificacions'  is null.");
          }
            _context.TipoIdentificacions.Add(tipoIdentificacion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTipoIdentificacion", new { id = tipoIdentificacion.IdTipoIde }, tipoIdentificacion);
        }

        // DELETE: api/TipoIdentificaciones/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTipoIdentificacion(int id)
        {
            if (_context.TipoIdentificacions == null)
            {
                return NotFound();
            }
            var tipoIdentificacion = await _context.TipoIdentificacions.FindAsync(id);
            if (tipoIdentificacion == null)
            {
                return NotFound();
            }

            _context.TipoIdentificacions.Remove(tipoIdentificacion);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TipoIdentificacionExists(int id)
        {
            return (_context.TipoIdentificacions?.Any(e => e.IdTipoIde == id)).GetValueOrDefault();
        }
    }
}
