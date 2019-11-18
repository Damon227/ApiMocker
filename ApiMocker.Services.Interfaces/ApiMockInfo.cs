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

        public string ResponseFormats { get; set; }
    }

    public class FieldFormat
    {
        public string FieldName { get; set; }

        public string FieldType { get; set; }

        public string FieldDesc { get; set; }
    }
}
