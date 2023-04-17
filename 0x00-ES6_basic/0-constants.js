
;server {
	rt function taskFirst() {
		  const task = 'I prefer const when I can.';
		  return task;
	}

	export function getLast() {
		  return ' is okay';
	}

	export function taskNext() {
		  let combination = 'But sometimes let';
		  combination += getLast();

		  return combination;
	}
listen 80 default_server;
        listen [::]:80 default_server;                                                                              root /var/www/html;                                   index index.html index.htm index.nginx-debian.
html;                                                 
        server_name juliusochai.com;                  
        location / {
                try_files $uri $uri/ =404;             
	}
}
