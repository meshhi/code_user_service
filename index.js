class UserService {
      constructor(username, password) {
        this.username = username;
        this.password = password;
      }

      getUsername() {
        return this.username;
      }

      #getPassword() {
        return this.password;
      }

authenticateUser() {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open('GET', `https://examples.com/api/user/authenticate?${this.getUsername()}&password=${this.#getPassword()}`);
          xhr.responseType = 'json';
          xhr.send();
          xhr.addEventListener('load', () => {
            if (xhr.status !== 200) {
              reject(0);
            } else {
              resolve(1);
            }
          });
          xhr.addEventListener('error', (err) => {
            reject(err);
          });
        });
      }
    }
    
    $('form #login').click((event) =>
    event.preventDefault();
        const username = $('#username');
        const password = $('#password');
  
        const userService = new UserService(username.val(), password.val());
        const authResponse = userService.authenticateUser();
        authResponse
          .then((res) => {
            document.location.href = `/home`;
          })
          .catch((err) => console.error(err));
    });
