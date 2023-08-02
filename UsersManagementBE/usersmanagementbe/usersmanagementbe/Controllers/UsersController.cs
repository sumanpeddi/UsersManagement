using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using usersmanagementbe.Interface;
using usersmanagementbe.Models;

namespace usersmanagementbe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UsersController : ControllerBase
    {
        private readonly IUserInfo _IUserInfo;

        public UsersController(IUserInfo IUserInfo)
        {
            _IUserInfo = IUserInfo;
        }

        // GET: api/employee>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserInfo>>> Get()
        {
            return await Task.FromResult(_IUserInfo.GetUserInfoDetails());
        }

        // GET api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserInfo>> Get(int id)
        {
            var user = await Task.FromResult(_IUserInfo.GetUserInfoDetails(id));
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        // POST api/employee
        [HttpPost]
        public async Task<ActionResult<UserInfo>> Post(UserInfo employee)
        {
            _IUserInfo.AddUserInfo(employee);
            return await Task.FromResult(employee);
        }

        // PUT api/employee/5
        [HttpPut("{id}")]
        public async Task<ActionResult<UserInfo>> Put(int id, UserInfo employee)
        {
            if (id != employee.UserId)
            {
                return BadRequest();
            }
            try
            {
                _IUserInfo.UpdateUserInfo(employee);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserInfoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return await Task.FromResult(employee);
        }

        // DELETE api/employee/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UserInfo>> Delete(int id)
        {
            var employee = _IUserInfo.DeleteUserInfo(id);
            return await Task.FromResult(employee);
        }

        private bool UserInfoExists(int id)
        {
            return _IUserInfo.CheckUserInfo(id);
        }

    }
}
