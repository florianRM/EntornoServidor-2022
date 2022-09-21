<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.jacaranda.Calculator.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
	int number1 = Integer.parseInt(request.getParameter("number1"));
	int number2 = Integer.parseInt(request.getParameter("number2"));
	Calculator calculator = new Calculator(number1, number2);
	String operationType = request.getParameter("operation");
	
	if(operationType.equals("1")) {
		out.println(calculator.plus());
	}
	%>
</body>
</html>