using Microsoft.EntityFrameworkCore;

namespace VirtualRecital.Models
{
    public class Mycontext : DbContext
    {
    public Mycontext(DbContextOptions options) : base(options) { }
    public DbSet<User> Users {get; set;}
    }
}