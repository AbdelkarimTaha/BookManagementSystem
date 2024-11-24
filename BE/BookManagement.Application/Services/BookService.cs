using BookManagement.Application.Interfaces;
using BookManagement.Core.Entities;
using BookManagement.Core.Interfaces;

namespace BookManagement.Application.Services;
public class BookService : IBookService
{
    private readonly IRepository<Book> _repository;

    public BookService(IRepository<Book> repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<Book>> GetBooksAsync()
    {
        return await _repository.GetAllAsync();
    }

    public async Task<Book> GetBookByIdAsync(int id)
    {
        return await _repository.GetByIdAsync(id);
    }

    public async Task AddBookAsync(Book book)
    {
        await _repository.AddAsync(book);
    }

    public async Task UpdateBookAsync(Book book)
    {
        await _repository.UpdateAsync(book);
    }

    public async Task DeleteBookAsync(int id)
    {
        await _repository.DeleteAsync(id);
    }
}