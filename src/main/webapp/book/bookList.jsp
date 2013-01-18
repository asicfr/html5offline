<%-- List screen for Book entity      --%>
<%-- Created on 17 déc. 2012 ( Time 15:39:59 )  --%>



<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<%@ taglib prefix="s" uri="/struts-tags" %>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>BookStore</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Book">
    <meta name="author" content="asic">

    <!-- Le styles -->
    <link href="<s:url value='/static/css/bootstrap.min.css' includeParams='none'/>" rel="stylesheet" />
    <style>
      body {
        padding-top: 60px; /* 60px to make the container go all the way to the bottom of the topbar */
      }
    </style>
    <link href="<s:url value='/static/css/bootstrap-responsive.min.css' includeParams='none'/>" rel="stylesheet" />
    <link href="<s:url value='/static/css/styles.css' includeParams='none'/>" rel="stylesheet" />
  </head>

  <body>

    <div class="navbar navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <a class="brand" href="#">Books List</a>
          <input type="button" class="btn btn-info" value="All" 	 onclick="directGet('search')" />
          <input type="button" class="btn btn-info" value="Back to Welcome Page" 	 onclick="goHome()" />
        </div>
      </div>
    </div>

    <div class="container">
		      
		<table  class="table table-bordered">
		<thead>
			<tr>
				<th><s:property value="getText('current.id')" /></th> 
				<th><s:property value="getText('current.publisherId')" /></th> 
				<th><s:property value="getText('current.authorId')" /></th> 
				<th><s:property value="getText('current.isbn')" /></th> 
				<th><s:property value="getText('current.title')" /></th> 
				<th><s:property value="getText('current.price')" /></th> 
				<th><s:property value="getText('current.quantity')" /></th> 
				<th><s:property value="getText('current.discount')" /></th> 
				<th><s:property value="getText('current.availability')" /></th> 
				<th><s:property value="getText('current.bestSeller')" /></th> 
				<th><a class="btn btn-info" href="<s:url value="/book/clear/" />">new</a></th> 
			</tr>
		</thead>
		<tbody>
			<s:iterator value="searchResult" >
				<tr>

					<td><s:property value="id" /></td>

					<td><s:property value="publisherId" /></td>

					<td><s:property value="authorId" /></td>

					<td><s:property value="isbn" /></td>

					<td><s:property value="title" /></td>

				<td><s:property value="%{getText('my.format.number',{price})}" /></td>

					<td><s:property value="quantity" /></td>

					<td><s:property value="discount" /></td>

					<td><s:property value="availability" /></td>

					<td><s:property value="bestSeller" /></td>

				<td><a class="btn btn-info" href="<s:url value="/book/load/%{id}" />" >edit</a> </td>
					
				</tr> 
			</s:iterator>
				<tr>
					<td colspan="11">
						<s:actionerror/>
						<s:actionmessage/>
						<s:fielderror/>
					</td>
				</tr>
		</tbody>
		</table>
		      

    </div> <!-- /container -->


    <script src="<s:url value='/static/javascript/jquery.js' includeParams='none'/>" ></script>
    <script src="<s:url value='/static/javascript/bootstrap.min.js' includeParams='none'/>" ></script>
	<script src="<s:url value='/static/javascript/validation.js' includeParams='none'/>" ></script>
	
	<script type="text/javascript">
		
		var urlBaseWelcome = '<s:url value="/" />';
		var urlBase = '<s:url action="book" includeParams="none" />';
		
		function changeActionAndsubmit(url) {
			document.bookForm.action = urlBase + '/' + url;
		    document.bookForm.submit();
		}
		
		function directDelete(idbook) {
			document.location = urlBase + '/delete/' + idbook;
		}
		
		function directGet(url) {
			document.location = urlBase + '/' + url;
		}
		
		function goHome() {
			document.location = urlBaseWelcome;
		}
		
		
	</script>

  </body>
</html>

