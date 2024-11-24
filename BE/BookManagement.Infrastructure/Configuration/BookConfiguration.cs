using BookManagement.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookManagement.Infrastructure.Configuration;
public class BookConfiguration : IEntityTypeConfiguration<Book>
{
    public void Configure(EntityTypeBuilder<Book> builder)
    {
        builder.HasKey(b => b.Id);

        builder.Property(b => b.Title)
               .IsRequired()
               .HasMaxLength(100);

        builder.Property(b => b.Genre)
               .IsRequired()
               .HasMaxLength(50);

        builder.Property(b => b.Author)
               .IsRequired()
               .HasMaxLength(50);

        builder.Property(b => b.PublishedYear)
               .IsRequired()
               .HasDefaultValue(2000);

        builder.HasIndex(b => b.Title)
               .IsUnique();
    }
}