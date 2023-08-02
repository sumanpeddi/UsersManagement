using Microsoft.EntityFrameworkCore;
using usersmanagementbe.Interface;
using usersmanagementbe.Models;

namespace usersmanagementbe.Repository
{
    public class UserInfoRepository : IUserInfo
    {
        readonly UsersDbContext _dbContext;
        public UserInfoRepository(UsersDbContext dbContext)
        {

            _dbContext = dbContext;

        }
        public void AddUserInfo(UserInfo userinfo)
        {
            try
            {
                _dbContext.UserInfos.Add(userinfo);
                _dbContext.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        public bool CheckUserInfo(int id)
        {
            return _dbContext.UserInfos.Any(e => e.UserId == id);
        }

        public UserInfo DeleteUserInfo(int id)
        {
            try
            {
                UserInfo? userinfo = _dbContext.UserInfos.Find(id);

                if (userinfo != null)
                {
                    _dbContext.UserInfos.Remove(userinfo);
                    _dbContext.SaveChanges();
                    return userinfo;
                }
                else
                {
                    throw new ArgumentNullException();
                }
            }
            catch
            {
                throw;
            }
        }

        public List<UserInfo> GetUserInfoDetails()
        {
            try
            {
                return _dbContext.UserInfos.ToList();
            }
            catch
            {
                throw;
            }
        }

        public UserInfo GetUserInfoDetails(int id)
        {
            try
            {
                UserInfo? userinfo = _dbContext.UserInfos.Find(id);
                if (userinfo != null)
                {
                    return userinfo;
                }
                else
                {
                    throw new ArgumentNullException();
                }
            }
            catch
            {
                throw;
            }
        }

        public void UpdateUserInfo(UserInfo userinfo)
        {
            try
            {
                _dbContext.Update(userinfo);
                _dbContext.SaveChanges();
            }
            catch
            {
                throw;
            }
        }
    }
}
