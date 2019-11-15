using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiMocker.Services.Interfaces;

namespace ApiMockerApplication.Models.ApiMocker
{
    public class CreateApiMockerRequest
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public string ApiMethod { get; set; }

        public List<RequestFormat> RequestFormats { get; set; }

        public string ResponseFormat { get; set; }
    }
}
