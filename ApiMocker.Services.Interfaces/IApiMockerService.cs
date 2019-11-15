using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ApiMocker.Services.Interfaces
{
    public interface IApiMockerService
    {
        Task<ApiMockInfo> CreateAsync(string name, string description, string apiMethod, List<RequestFormat> requestFormats, string responseFormat);

        Task<List<ApiMockInfo>> GetAllAsync();
    }
}
