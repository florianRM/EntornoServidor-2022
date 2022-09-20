<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
	img{
		width: 50px;
		height: 50px;
	}
	
	p {
		text-align: center;
	}
</style>
</head>
<body>
	<p>
		<% int numCirculos = Integer.valueOf(request.getParameter("numCirculos")); 
		for(int i=0; i < numCirculos; i++) {
			int j = i + 1;
			while(j != 0) {%>
				<img src="circulo.png">
			<%	j--;
			}%>
			</br>
		<%}%>
	</p>
</body>
</html>