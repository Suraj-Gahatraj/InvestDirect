using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InvestDirect.Data.Entities
{
    public class Deposit
    {
        public int Id { get; set; }
        public double Amount { get; set; }
        public string DepositedBy { get; set; }
        public DateTime DepositedDate { get; set; }
        public string DepositMedium {get;set;}
    }
}
