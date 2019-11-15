using System;
using System.Collections.Generic;
using System.Text;

namespace ApiMocker.Services.Interfaces
{
    public class ApiMockInfo
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public string ApiMethod { get; set; }

        public string RequestFormats { get; set; }

        public string ResponseFormat { get; set; }
    }

    public class RequestFormat
    {
        public string FiledName { get; set; }

        public string Type { get; set; }

        public string Description { get; set; }
    }
}
