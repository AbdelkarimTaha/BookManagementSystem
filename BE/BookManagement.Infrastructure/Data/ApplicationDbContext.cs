using BookManagement.Core.Entities;
using BookManagement.Infrastructure.Configuration;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace BookManagement.Infrastructure.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }


    public DbSet<Book> Books { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetAssembly(typeof(BookConfiguration)));
    }
}
