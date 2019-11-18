using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ApiMocker.Services.Interfaces;
using Newtonsoft.Json;

namespace ApiMocker.Services
{
    public class ApiMockerService : IApiMockerService
    {
        private static ConcurrentDictionary<string, ApiMockInfo> s_db;

        public ApiMockerService()
        {
            if (s_db == null)
            {
                s_db = InitData();
            }
        }

        private static ConcurrentDictionary<string, ApiMockInfo> InitData()
        {
            ConcurrentDictionary<string, ApiMockInfo> data = new ConcurrentDictionary<string, ApiMockInfo>();
            data.TryAdd("api/messages/get", new ApiMockInfo
            {
                Name = "api/messages/get",
                Description = "获取消息列表",
                ApiMethod = "GET",
                RequestFormats = null,
                ResponseFormats = "{\"messageId\":\"12001\",\"title\":\"账单通知\",\"content\":\"这是消息内容\",\"time\":\"2019-01-01 12:12:42\"}"
            });
            data.TryAdd("api/messages/send", new ApiMockInfo
            {
                Name = "api/message/send",
                Description = "发送消息",
                ApiMethod = "POST",
                RequestFormats = null,
                ResponseFormats = "{\"messageId\":\"12001\",\"title\":\"账单通知\",\"content\":\"这是消息内容\",\"time\":\"2019-01-01 12:12:42\"}"
            });

            return data;
        }

        public Task<ApiMockInfo> CreateAsync(string name, string description, string apiMethod, List<FieldFormat> requestFormats, List<FieldFormat> responseFormats)
        {
            if (!s_db.TryGetValue(name, out ApiMockInfo _))
            {
                ApiMockInfo info = new ApiMockInfo
                {
                    Name = name,
                    Description = description,
                    ApiMethod = apiMethod,
                    RequestFormats = JsonConvert.SerializeObject(requestFormats),
                    ResponseFormats = JsonConvert.SerializeObject(responseFormats)
                };
                s_db.AddOrUpdate(name, info, (a, b) => info);

                return Task.FromResult(info);
            }

            throw new Exception($"The ApiMock info with the name '{name}' is exist.");
        }

        public Task<List<ApiMockInfo>> GetAllAsync()
        {
            return Task.FromResult(s_db.Values.ToList());
        }
    }
}
