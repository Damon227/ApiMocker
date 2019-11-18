using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ApiMocker.Services.Interfaces
{
    public interface IApiMockerService
    {
        Task<ApiMockInfo> CreateAsync(string name, string description, string apiMethod, List<FieldFormat> requestFormats, List<FieldFormat> responseFormats);

        Task<List<ApiMockInfo>> GetAllAsync();
    }
}
