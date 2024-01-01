-- use carefully -- not debugged

function trap(f,a,b,n) -- returns the quadrature using trapezoid of f on [a,b] for n steps
  local h=(b-a)/n
  local sum=0.5*(f(a)+f(b))
  for k=1,n-1 do
    sum = sum+2*f(a+k*h)
  end 
  --return 0.5*h*sum
  return sum*h
end

-- this isn't quite finished yet either

function romberg(f,a,b,eps)
    local h=(b-a)
    local sum = 0.5*h*(f(a)+f(b))
    local R = {}
    local i,k   -- index for the trapezoid sum
    local terms=0.5 -- number of terms in the trap sum
    --k = 1
    R[1]={sum}
    
    for k=2,10 do 
      h=0.5*h
      sum=0; terms = terms *2
      for i =1,terms do
        sum = sum + f(a+(2*i-1)*h)
      end 
      R[k]={0.5*(R[k-1][1]+2*h*sum)}
      for j=2,k do
        R[k][j] = (4^(j-1)*R[k][j-1]-R[k-1][j-1])/(4^(j-1)-1)
      end
      if (math.abs(R[k][k]-R[k-1][k-1])<eps) then
        return R[k][k]
      end
   end 
    return R[4][4]
end


function bessel(n,x)
    function bk(t)
        return math.cos(n*t-x*math.sin(t))
    end

    return romberg(bk,0,math.pi,0.00001)/math.pi
end 


    