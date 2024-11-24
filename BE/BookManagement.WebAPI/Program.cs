using BookManagement.WebAPI.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddCORS()
    .AddDb(builder.Configuration)
    .AddSwagger()
    .AddApplicationServices();

var app = builder.Build();

app.UseSwaggerDocumentation();
app.UseCors("AllowAllOrigins");
app.MapControllers();
app.Run();