using BookManagement.Application.Interfaces;
using BookManagement.Application.Services;
using BookManagement.Core.Interfaces;
using BookManagement.Infrastructure.Data;

namespace BookManagement.WebAPI.Extensions;

public static class ApplicationServiceExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
        services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
        services.AddScoped<IBookService, BookService>();

        services.AddControllers();

        return services;
    }
}
