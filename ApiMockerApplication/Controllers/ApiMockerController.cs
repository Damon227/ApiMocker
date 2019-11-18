using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiMocker.Services.Interfaces;
using ApiMockerApplication.Models.ApiMocker;
using Microsoft.AspNetCore.Mvc;

namespace ApiMockerApplication.Controllers
{
    [ApiController]
    [Route("api/apimocker")]
    public class ApiMockerController : ControllerBase
    {
        private readonly IApiMockerService _apiMockerService;

        public ApiMockerController(IApiMockerService apiMockerService)
        {
            _apiMockerService = apiMockerService;
        }

        [HttpPost, Route("add")]
        public async Task<IActionResult> Add([FromBody] CreateApiMockerRequest request)
        {
            ApiMockInfo result = await _apiMockerService.CreateAsync(request.Name, request.Description, request.ApiMethod, request.RequestFormats, request.ResponseFormats);
            return Ok(result);
        }

        [HttpGet, Route("get")]
        public async Task<IActionResult> Get()
        {
            List<ApiMockInfo> result = await _apiMockerService.GetAllAsync();
            return Ok(result);
        }
    }
}
